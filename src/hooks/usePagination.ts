import { useMemo } from "react";

interface Props {
    totalUsers: number;
    currentPage: number;
    pageSize: number;
}

export function usePagination({ totalUsers, pageSize, currentPage }: Props) {
    const paginationRang = useMemo(() => {
        const totalPages = Math.ceil(totalUsers / pageSize);

        // const startPage = Math.max(1, currentPage - 5);
        // const endPage = Math.min(totalPages, currentPage + 4);
        // const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => i + startPage);

        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }

        return pages;

    }, [pageSize, totalUsers])

    return paginationRang
}