import { Subject } from '../types';

export const MOCK_SUBJECTS: Subject[] = [
    {
        id: 1,
        code: 'CS101',
        name: 'Data Science',
        department: 'CS',
        description: 'An introductory course that covers CS',
        createdAt: new Date().toISOString()
    },
    {
        id: 2,
        code: 'MATH201',
        name: 'Calculus I',
        department: 'Math',
        description: 'Study of integration, sequence, series and power series ',
        createdAt: new Date().toISOString()
    },
    {
        id: 3,
        code: 'CS104',
        name: 'Web Development',
        department: 'CS',
        description: 'Web development and more.. ',
        createdAt: new Date().toISOString()
    },
]