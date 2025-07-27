import { create } from 'zustand'
interface LockedState {
  locked: boolean
  setLocked: (newVal: boolean) => void
}
const useLocked = create<LockedState>((set) => ({
  locked: true,
  setLocked: (newVal: boolean): void => set(() => ({ locked: newVal }))
}))
export default useLocked
