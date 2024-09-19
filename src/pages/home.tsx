import UsersTable from "@/components/users-table";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* <Counter /> */}
      <div className="w-[1400px] mx-auto space-y-5">
        <h3 className="text-2xl font-bold text-center">Users Table</h3>
        <UsersTable />
      </div>
    </main>
  );
};

export default HomePage;
