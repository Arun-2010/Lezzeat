import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { AuthPage } from './AuthPage';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChefHat, Clock, Star, Users } from 'lucide-react';

const Index = () => {
  const { isAuthenticated, user } = useAuth();
  const [currentPage, setCurrentPage] = useState('menu');

  if (!isAuthenticated) {
    return <AuthPage />;
  }

  const renderContent = () => {
    switch (currentPage) {
      case 'menu':
        return (
          <div className="space-y-6">
            <div className="text-center py-12 bg-gradient-primary rounded-xl text-primary-foreground">
              <h1 className="text-4xl font-bold mb-4">Welcome to College Canteen</h1>
              <p className="text-xl opacity-90">Delicious meals, quick service, great prices!</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-medium transition-all duration-200">
                <CardHeader>
                  <ChefHat className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Fresh Food Daily</CardTitle>
                  <CardDescription>Made fresh every day with quality ingredients</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="hover:shadow-medium transition-all duration-200">
                <CardHeader>
                  <Clock className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Quick Service</CardTitle>
                  <CardDescription>Fast preparation and pickup times</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="hover:shadow-medium transition-all duration-200">
                <CardHeader>
                  <Star className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Top Rated</CardTitle>
                  <CardDescription>Highly rated by students and faculty</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">{currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}</h2>
            <p className="text-muted-foreground">This feature is coming soon!</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
