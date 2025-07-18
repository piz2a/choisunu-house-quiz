import { create } from 'zustand'
import { QUIZ_DATA } from '../QuizData'

type Answer = boolean | null

interface AnswerStore {
    userAnswers: Answer[]
    setAnswer: (index: number, value: boolean) => void
    resetAnswers: () => void
}

export const useAnswerStore = create<AnswerStore>((set) => ({
    userAnswers: Array(QUIZ_DATA.length).fill(null),
    setAnswer: (index, value) =>
        set((state) => {
            const updated = [...state.userAnswers]
            updated[index] = value
            return { userAnswers: updated }
        }),
    resetAnswers: () => set({ userAnswers: Array(QUIZ_DATA.length).fill(null) }),
}))