import { createContext } from "react";
import type { BudgetActions, BudgetState } from "../reducers/budgetReducer";

type BudgetContextProps = {
    state: BudgetState
    dispatch: React.Dispatch<BudgetActions>
    totalExpenses: number
    remainingBudget: number
}

export const BudgetContext = createContext<BudgetContextProps>(null!)