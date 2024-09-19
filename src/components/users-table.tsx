import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PaginationContainer from "./pagination";
import { useGetUsers } from "@/hooks/useGetUsers";
import { SetStateAction, useState } from "react";
import { LoaderIcon } from "lucide-react";

let usersPerPage = 10;

const UsersTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const skip = (currentPage - 1) * usersPerPage;
  const { data, isPending } = useGetUsers(skip);

  return (
    <div>
      {isPending && (
        <div className="mt-32 flex items-center justify-center">
          <LoaderIcon className="animate-spin" />
        </div>
      )}
      {data && (
        <Table className="bg-white">
          <TableCaption>A list of all users.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[10px] font-bold">#</TableHead>
              <TableHead>First Name</TableHead>
              <TableHead>Last Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead className="text-right">City</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.users?.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell className="text-right">
                  {user.address.city}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      <PaginationContainer
        currentPage={currentPage}
        onPageChange={(page: SetStateAction<number>) => setCurrentPage(page)}
        perPage={usersPerPage}
        totalUsers={data?.total!}
      />
    </div>
  );
};

export default UsersTable;
