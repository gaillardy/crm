"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ThemeToggle } from '@/components/theme-toggle';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Settings, 
  Palette, 
  Info, 
  Shield,
  Database,
  Zap
} from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Paramètres</h1>
        <p className="text-muted-foreground">
          Configurez votre application CRM
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Appearance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="w-5 h-5" />
              Apparence
            </CardTitle>
            <CardDescription>
              Personnalisez l'apparence de votre interface
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Thème</h4>
                <p className="text-sm text-muted-foreground">
                  Basculez entre le mode clair et sombre
                </p>
              </div>
              <ThemeToggle />
            </div>
          </CardContent>
        </Card>

        {/* System Info */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="w-5 h-5" />
              Informations système
            </CardTitle>
            <CardDescription>
              Détails techniques de l'application
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Version</span>
                <Badge variant="secondary">1.0.0</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Framework</span>
                <Badge variant="outline">Next.js 15.3.4</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">React</span>
                <Badge variant="outline">19.0.0</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">TypeScript</span>
                <Badge variant="outline">5.6.3</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Sécurité
            </CardTitle>
            <CardDescription>
              Paramètres de sécurité et confidentialité
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-sm font-medium">Authentification</h4>
                  <p className="text-xs text-muted-foreground">Mode démo activé</p>
                </div>
                <Badge variant="secondary">Demo</Badge>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-sm font-medium">Stockage local</h4>
                  <p className="text-xs text-muted-foreground">Données sauvegardées localement</p>
                </div>
                <Badge variant="outline">Actif</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Performance
            </CardTitle>
            <CardDescription>
              Optimisations et fonctionnalités avancées
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-sm font-medium">Gestion d'état</h4>
                  <p className="text-xs text-muted-foreground">Zustand avec persistance</p>
                </div>
                <Badge variant="secondary">Zustand</Badge>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-sm font-medium">Animations</h4>
                  <p className="text-xs text-muted-foreground">Transitions fluides activées</p>
                </div>
                <Badge variant="outline">Actif</Badge>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-sm font-medium">Responsive Design</h4>
                  <p className="text-xs text-muted-foreground">Optimisé mobile et desktop</p>
                </div>
                <Badge variant="outline">Actif</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tech Stack */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="w-5 h-5" />
            Stack Technique
          </CardTitle>
          <CardDescription>
            Technologies utilisées dans ce projet
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-lg border">
              <h4 className="font-medium mb-2">Frontend</h4>
              <div className="space-y-1">
                <Badge variant="outline" className="block">Next.js 15.3.4</Badge>
                <Badge variant="outline" className="block">React 19</Badge>
                <Badge variant="outline" className="block">TypeScript</Badge>
              </div>
            </div>
            <div className="text-center p-4 rounded-lg border">
              <h4 className="font-medium mb-2">Styling</h4>
              <div className="space-y-1">
                <Badge variant="outline" className="block">Tailwind CSS</Badge>
                <Badge variant="outline" className="block">shadcn/ui</Badge>
                <Badge variant="outline" className="block">Lucide Icons</Badge>
              </div>
            </div>
            <div className="text-center p-4 rounded-lg border">
              <h4 className="font-medium mb-2">State & Forms</h4>
              <div className="space-y-1">
                <Badge variant="outline" className="block">Zustand</Badge>
                <Badge variant="outline" className="block">React Hook Form</Badge>
                <Badge variant="outline" className="block">Zod</Badge>
              </div>
            </div>
            <div className="text-center p-4 rounded-lg border">
              <h4 className="font-medium mb-2">Utils</h4>
              <div className="space-y-1">
                <Badge variant="outline" className="block">date-fns</Badge>
                <Badge variant="outline" className="block">next-themes</Badge>
                <Badge variant="outline" className="block">Sonner</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}