import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Client {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: string;
  tags: string[];
  activities: Activity[];
  company?: string;
  position?: string;
  notes?: string;
}

export interface Activity {
  id: string;
  type: 'call' | 'email' | 'meeting' | 'note';
  title: string;
  description: string;
  date: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: { name: string; email: string } | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

interface ClientState {
  clients: Client[];
  searchTerm: string;
  sortBy: 'name' | 'email' | 'createdAt';
  sortOrder: 'asc' | 'desc';
  currentPage: number;
  itemsPerPage: number;
  selectedTags: string[];
  addClient: (client: Omit<Client, 'id' | 'createdAt' | 'activities'>) => void;
  updateClient: (id: string, client: Partial<Client>) => void;
  deleteClient: (id: string) => void;
  setSearchTerm: (term: string) => void;
  setSortBy: (sortBy: 'name' | 'email' | 'createdAt') => void;
  setSortOrder: (order: 'asc' | 'desc') => void;
  setCurrentPage: (page: number) => void;
  setSelectedTags: (tags: string[]) => void;
  addActivity: (clientId: string, activity: Omit<Activity, 'id' | 'date'>) => void;
}

// Mock data
const mockClients: Client[] = [
  {
    id: '1',
    firstName: 'Marie',
    lastName: 'Dubois',
    email: 'marie.dubois@example.com',
    phone: '+261 33 94 565 45',
    createdAt: '2025-01-15T10:30:00Z',
    company: 'TechCorp',
    position: 'Directrice Marketing',
    tags: ['VIP', 'Marketing'],
    activities: [
      {
        id: '1',
        type: 'call',
        title: 'Appel de prospection',
        description: 'Discussion sur les besoins en marketing digital',
        date: '2025-01-20T14:30:00Z'
      },
      {
        id: '2',
        type: 'email',
        title: 'Envoi de proposition',
        description: 'Proposition commerciale envoyée',
        date: '2025-01-22T09:15:00Z'
      }
    ]
  },
  {
    id: '2',
    firstName: 'Pierre',
    lastName: 'Martin',
    email: 'pierre.martin@example.com',
    phone: '+261 32 85 945 60',
    createdAt: '2025-01-10T14:20:00Z',
    company: 'InnovateLab',
    position: 'CTO',
    tags: ['Tech', 'Innovation'],
    activities: [
      {
        id: '3',
        type: 'meeting',
        title: 'Réunion technique',
        description: 'Présentation de nos solutions techniques',
        date: '2025-01-18T16:00:00Z'
      }
    ]
  },
  {
    id: '3',
    firstName: 'Sophie',
    lastName: 'Bernard',
    email: 'sophie.bernard@example.com',
    phone: '+261 38 44 540 12',
    createdAt: '2025-01-05T09:45:00Z',
    company: 'StartupXYZ',
    position: 'CEO',
    tags: ['Startup', 'VIP'],
    activities: [
      {
        id: '4',
        type: 'note',
        title: 'Note de suivi',
        description: 'Client très intéressé par nos services',
        date: '2025-01-12T11:30:00Z'
      }
    ]
  },
  {
    id: '4',
    firstName: 'Thomas',
    lastName: 'Leroy',
    email: 'thomas.leroy@example.com',
    phone: '+261 33 94 565 45',
    createdAt: '2025-01-08T16:15:00Z',
    company: 'BigCorp',
    position: 'Responsable Achats',
    tags: ['Corporate'],
    activities: []
  },
  {
    id: '5',
    firstName: 'Emma',
    lastName: 'Rousseau',
    email: 'emma.rousseau@example.com',
    phone: '+261 32 85 945 60',
    createdAt: '2025-01-12T11:00:00Z',
    company: 'DesignStudio',
    position: 'Directrice Créative',
    tags: ['Design', 'Créatif'],
    activities: [
      {
        id: '5',
        type: 'call',
        title: 'Appel de suivi',
        description: 'Discussion sur le projet en cours',
        date: '2025-01-25T10:00:00Z'
      }
    ]
  }
];

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      login: (email: string, password: string) => {
        // Mock authentication
        set({
          isAuthenticated: true,
          user: { name: 'Utilisateur Demo', email }
        });
      },
      logout: () => {
        set({
          isAuthenticated: false,
          user: null
        });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);

export const useClientStore = create<ClientState>()(
  persist(
    (set, get) => ({
      clients: mockClients,
      searchTerm: '',
      sortBy: 'createdAt',
      sortOrder: 'desc',
      currentPage: 1,
      itemsPerPage: 10,
      selectedTags: [],
      addClient: (clientData) => {
        const newClient: Client = {
          ...clientData,
          id: Date.now().toString(),
          createdAt: new Date().toISOString(),
          activities: []
        };
        set((state) => ({
          clients: [...state.clients, newClient]
        }));
      },
      updateClient: (id, clientData) => {
        set((state) => ({
          clients: state.clients.map((client) =>
            client.id === id ? { ...client, ...clientData } : client
          )
        }));
      },
      deleteClient: (id) => {
        set((state) => ({
          clients: state.clients.filter((client) => client.id !== id)
        }));
      },
      setSearchTerm: (term) => {
        set({ searchTerm: term, currentPage: 1 });
      },
      setSortBy: (sortBy) => {
        set({ sortBy });
      },
      setSortOrder: (order) => {
        set({ sortOrder: order });
      },
      setCurrentPage: (page) => {
        set({ currentPage: page });
      },
      setSelectedTags: (tags) => {
        set({ selectedTags: tags, currentPage: 1 });
      },
      addActivity: (clientId, activityData) => {
        const newActivity: Activity = {
          ...activityData,
          id: Date.now().toString(),
          date: new Date().toISOString()
        };
        set((state) => ({
          clients: state.clients.map((client) =>
            client.id === clientId
              ? { ...client, activities: [...client.activities, newActivity] }
              : client
          )
        }));
      },
    }),
    {
      name: 'client-storage',
    }
  )
);