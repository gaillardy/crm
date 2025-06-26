"use client";

import { useClientStore } from '@/lib/store';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, UserPlus, TrendingUp, Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

export default function DashboardPage() {
  const { clients } = useClientStore();

  const stats = {
    totalClients: clients.length,
    newThisMonth: clients.filter(client => {
      const clientDate = new Date(client.createdAt);
      const now = new Date();
      return clientDate.getMonth() === now.getMonth() && 
             clientDate.getFullYear() === now.getFullYear();
    }).length,
    totalActivities: clients.reduce((acc, client) => acc + client.activities.length, 0),
    recentClients: clients
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 5)
  };

  const allTags = Array.from(new Set(clients.flatMap(client => client.tags)));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Vue d'ensemble de votre activité commerciale
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="animate-slide-up">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalClients}</div>
            <p className="text-xs text-muted-foreground">
              Clients enregistrés
            </p>
          </CardContent>
        </Card>

        <Card className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Nouveaux ce mois</CardTitle>
            <UserPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.newThisMonth}</div>
            <p className="text-xs text-muted-foreground">
              +{Math.round((stats.newThisMonth / stats.totalClients) * 100)}% ce mois
            </p>
          </CardContent>
        </Card>

        <Card className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Activités</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalActivities}</div>
            <p className="text-xs text-muted-foreground">
              Interactions enregistrées
            </p>
          </CardContent>
        </Card>

        <Card className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tags Actifs</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{allTags.length}</div>
            <p className="text-xs text-muted-foreground">
              Catégories utilisées
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Clients */}
        <Card className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <CardHeader>
            <CardTitle>Clients Récents</CardTitle>
            <CardDescription>
              Les 5 derniers clients ajoutés
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.recentClients.map((client, index) => (
                <div key={client.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-primary">
                        {client.firstName.charAt(0)}{client.lastName.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        {client.firstName} {client.lastName}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {client.email}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">
                      {format(new Date(client.createdAt), 'dd MMM', { locale: fr })}
                    </p>
                    {client.tags.length > 0 && (
                      <Badge variant="secondary" className="text-xs mt-1">
                        {client.tags[0]}
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tags Overview */}
        <Card className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <CardHeader>
            <CardTitle>Répartition par Tags</CardTitle>
            <CardDescription>
              Distribution des clients par catégorie
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {allTags.map((tag) => {
                const count = clients.filter(client => client.tags.includes(tag)).length;
                const percentage = Math.round((count / stats.totalClients) * 100);
                
                return (
                  <div key={tag} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{tag}</Badge>
                      <span className="text-sm text-muted-foreground">
                        {count} clients ({percentage}%)
                      </span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}