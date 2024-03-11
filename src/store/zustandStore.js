import { create } from 'zustand'
import { persist } from 'zustand/middleware'
export const useZustandStore = create(persist((set) => ({
  tasks: [],
  addTask: (task) => set((state) =>({tasks: [...state.tasks, task ]})),
  removeTask: (id) => set((state) =>({tasks: state.tasks.filter(e => e.id !== id)}))
}), {name: 'zuStandStore'}))
