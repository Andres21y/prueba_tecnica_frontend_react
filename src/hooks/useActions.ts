import { useCallback, useEffect, useState } from "react"
import type { Action, PaginatedResponse } from "../utils/interface"
import { apiFetch } from "../api/client";

export const useActions = (initialPage = 1, pageSize = 10) => {
    const [data, setData] = useState<Action[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(initialPage);

    const fetchActions = useCallback(async () => {
        setLoading(true);
        try {
            const response: PaginatedResponse = await apiFetch(`/actions/admin-list?pageNumber=${page}&pageSize=${pageSize}`);
            setData(Array.isArray(response) ? response : response.data || []);
            setError(null);

        } catch (error: any) {
            setError(error.message || `Error to loading actions`);
        } finally {
            setLoading(false)
        }
    }, [page, pageSize]);

    useEffect(() => {
        fetchActions();
    }, [fetchActions]);

    return {
        data,
        loading,
        error,
        page,
        setPage,
        refetch: fetchActions
    }
}