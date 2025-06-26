"use client";

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useClientStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  Building, 
  User, 
  Calendar,
  Plus,
  MessageSquare,
  PhoneCall,
  Video,
  FileText
} from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import AddActivityDialog from '@/components/clients/add-activity-dialog';

const activityIcons = {
  call: PhoneCall,
  email: Mail,
  meeting: Video,
  note: FileText,
};

const activityColors = {
  call: 'text-green-600',
  email: 'text-blue-600',
  meeting: 'text-purple-600',
  note: 'text-orange-600',
};


export default function ClientDetailClient({ clientId }: { clientId: string }) {
    const params = useParams();
    const router = useRouter();
    const { clients } = useClientStore();
    const [showAddActivity, setShowAddActivity] = useState(false);
  
    const client = clients.find(c => c.id === params.id);
  
    if (!client) {
      return (
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Client non trouvé</h2>
            <p className="text-muted-foreground mb-4">
              Le client que vous recherchez n'existe pas.
            </p>
            <Button onClick={() => router.push('/dashboard/clients')}>
              Retour à la liste
            </Button>
          </div>
        </div>
      );
    }
  
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => router.back()}
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="flex-1">
            <h1 className="text-3xl font-bold tracking-tight">
              {client.firstName} {client.lastName}
            </h1>
            <p className="text-muted-foreground">
              Fiche client détaillée
            </p>
          </div>
          <Button onClick={() => setShowAddActivity(true)} className="gap-2">
            <Plus className="w-4 h-4" />
            Ajouter une activité
          </Button>
        </div>
  
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Client Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                    {client.firstName.charAt(0)}{client.lastName.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">
                  {client.firstName} {client.lastName}
                </CardTitle>
                <CardDescription>
                  {client.position && client.company 
                    ? `${client.position} chez ${client.company}`
                    : client.company || 'Client'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{client.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{client.phone}</span>
                </div>
                {client.company && (
                  <div className="flex items-center gap-3">
                    <Building className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{client.company}</span>
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">
                    Créé le {format(new Date(client.createdAt), 'dd MMMM yyyy', { locale: fr })}
                  </span>
                </div>
                
                {client.tags.length > 0 && (
                  <>
                    <Separator />
                    <div>
                      <h4 className="text-sm font-medium mb-2">Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        {client.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </>
                )}
  
                {client.notes && (
                  <>
                    <Separator />
                    <div>
                      <h4 className="text-sm font-medium mb-2">Notes</h4>
                      <p className="text-sm text-muted-foreground">
                        {client.notes}
                      </p>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
  
          {/* Activities */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Historique des activités
                </CardTitle>
                <CardDescription>
                  {client.activities.length} activité{client.activities.length > 1 ? 's' : ''} enregistrée{client.activities.length > 1 ? 's' : ''}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {client.activities.length === 0 ? (
                  <div className="text-center py-8">
                    <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Aucune activité</h3>
                    <p className="text-muted-foreground mb-4">
                      Commencez à enregistrer vos interactions avec ce client.
                    </p>
                    <Button onClick={() => setShowAddActivity(true)} className="gap-2">
                      <Plus className="w-4 h-4" />
                      Ajouter une activité
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {client.activities
                      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                      .map((activity) => {
                        const Icon = activityIcons[activity.type];
                        const colorClass = activityColors[activity.type];
                        
                        return (
                          <div key={activity.id} className="flex gap-4 p-4 rounded-lg border bg-card">
                            <div className={`w-10 h-10 rounded-full bg-background border-2 flex items-center justify-center ${colorClass}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 space-y-1">
                              <div className="flex items-center justify-between">
                                <h4 className="font-medium">{activity.title}</h4>
                                <span className="text-sm text-muted-foreground">
                                  {format(new Date(activity.date), 'dd MMM yyyy à HH:mm', { locale: fr })}
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {activity.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
  
        <AddActivityDialog
          open={showAddActivity}
          onOpenChange={setShowAddActivity}
          clientId={client.id}
        />
      </div>
    );
}