import { useClientStore, useAuthStore } from '@/lib/store';

describe('useAuthStore', () => {
  beforeEach(() => {
    // Reset store state
    useAuthStore.getState().logout();
  });

  it('should initialize with unauthenticated state', () => {
    const { isAuthenticated, user } = useAuthStore.getState();
    expect(isAuthenticated).toBe(false);
    expect(user).toBe(null);
  });

  it('should login user', () => {
    const { login } = useAuthStore.getState();
    login('test@example.com', 'password');
    
    const { isAuthenticated, user } = useAuthStore.getState();
    expect(isAuthenticated).toBe(true);
    expect(user).toEqual({
      name: 'Utilisateur Demo',
      email: 'test@example.com'
    });
  });

  it('should logout user', () => {
    const { login, logout } = useAuthStore.getState();
    
    // First login
    login('test@example.com', 'password');
    expect(useAuthStore.getState().isAuthenticated).toBe(true);
    
    // Then logout
    logout();
    const { isAuthenticated, user } = useAuthStore.getState();
    expect(isAuthenticated).toBe(false);
    expect(user).toBe(null);
  });
});

describe('useClientStore', () => {
  beforeEach(() => {
    // Reset store state
    const store = useClientStore.getState();
    store.setSearchTerm('');
    store.setSelectedTags([]);
    store.setCurrentPage(1);
  });

  it('should initialize with mock clients', () => {
    const { clients } = useClientStore.getState();
    expect(clients.length).toBeGreaterThan(0);
    expect(clients[0]).toHaveProperty('firstName');
    expect(clients[0]).toHaveProperty('lastName');
    expect(clients[0]).toHaveProperty('email');
  });

  it('should add new client', () => {
    const { addClient, clients } = useClientStore.getState();
    const initialCount = clients.length;
    
    const newClient = {
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      phone: '+261381234567',
      tags: ['Test'],
    };

    addClient(newClient);
    
    const updatedClients = useClientStore.getState().clients;
    expect(updatedClients.length).toBe(initialCount + 1);
    
    const addedClient = updatedClients.find(c => c.email === 'test@example.com');
    expect(addedClient).toBeDefined();
    expect(addedClient?.firstName).toBe('Test');
  });

  it('should update search term', () => {
    const { setSearchTerm } = useClientStore.getState();
    
    setSearchTerm('Marie');
    
    const { searchTerm } = useClientStore.getState();
    expect(searchTerm).toBe('Marie');
  });

  it('should update selected tags', () => {
    const { setSelectedTags } = useClientStore.getState();
    
    setSelectedTags(['VIP', 'Marketing']);
    
    const { selectedTags } = useClientStore.getState();
    expect(selectedTags).toEqual(['VIP', 'Marketing']);
  });

  it('should add activity to client', () => {
    const { addActivity, clients } = useClientStore.getState();
    const clientId = clients[0].id;
    const initialActivitiesCount = clients[0].activities.length;
    
    const newActivity = {
      type: 'call' as const,
      title: 'Test Call',
      description: 'Test description',
    };

    addActivity(clientId, newActivity);
    
    const updatedClient = useClientStore.getState().clients.find(c => c.id === clientId);
    expect(updatedClient?.activities.length).toBe(initialActivitiesCount + 1);
    
    const addedActivity = updatedClient?.activities.find(a => a.title === 'Test Call');
    expect(addedActivity).toBeDefined();
    expect(addedActivity?.type).toBe('call');
  });

  it('should delete client', () => {
    const { deleteClient, clients } = useClientStore.getState();
    const clientToDelete = clients[0];
    const initialCount = clients.length;
    
    deleteClient(clientToDelete.id);
    
    const updatedClients = useClientStore.getState().clients;
    expect(updatedClients.length).toBe(initialCount - 1);
    expect(updatedClients.find(c => c.id === clientToDelete.id)).toBeUndefined();
  });
});