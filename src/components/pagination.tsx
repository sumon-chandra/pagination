import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePagination } from "@/hooks/usePagination";
import { FC, SetStateAction } from "react";

interface PaginateProps {
  currentPage: number;
  onPageChange: (page: SetStateAction<number>) => void;
  perPage: number;
  totalUsers: number;
}

const PaginationContainer: FC<PaginateProps> = ({
  totalUsers,
  currentPage,
  onPageChange,
  perPage,
}) => {
  const paginationRange = usePagination({
    totalUsers,
    currentPage,
    pageSize: perPage,
  });

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious />
        </PaginationItem>
        {paginationRange?.map((pageNumber) => (
          <PaginationItem
            className="cursor-pointer"
            onClick={() => onPageChange(pageNumber)}
            key={pageNumber}
          >
            <PaginationLink isActive={pageNumber === currentPage}>
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))}
        {/* <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem> */}
        <PaginationItem>
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationContainer;
