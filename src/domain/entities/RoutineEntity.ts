export interface RoutineEntity {
  id: string;
  imageUrl: string;
  title: string;
  desc: string;
  tags: string[];
  link?: string;
}

export const mockRoutine: RoutineEntity = {
  id: 'mock_routine_001',
  imageUrl: 'https://example.com/mock-routine.jpg',
  title: 'Morning Routine',
  desc: 'Follow these steps every morning to start your day right',
  tags: ['2x', 'daily'],
  link: 'www.google.com',
};
