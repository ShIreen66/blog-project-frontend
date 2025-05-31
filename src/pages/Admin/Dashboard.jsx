import { FaBell } from "react-icons/fa";
import DashboardCard from "./AdminDashboard";

export const Dashboard = () => (
  <div className="flex h-screen overflow-y-hidden ">

    <main className="flex-1 bg-gray-100 pl-[260px]">
      <header className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search"
          className="border rounded px-3 py-2 w-1/5"
        />
        <div className="flex items-center space-x-4">
          <FaBell className="text-gray-600" />
          <img src="https://images.unsplash.com/photo-1563694983011-6f4d90358083?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile" className="w-10 h-10 rounded-full" />
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <DashboardCard title="Total Posts" count={120} />
        <DashboardCard title="Categories" count={8} />
        <DashboardCard title="Comments" count={324} />
        <DashboardCard title="Users" count={56} />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/*Cards */}
        <div>
          <h2 className="font-semibold mb-2">Recent Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              [
                "Introduction to Blogging",
                "John Doe",
                "Apr 21, 2024",
                "Published",
              ],
              [
                "Tips for Writing Engaging Content",
                "John Doe",
                "Apr 19, 2024",
                "Draft",
              ],
              [
                "How to Optimize Your Blog for SEO",
                "John Doe",
                "Apr 17, 2024",
                "Published",
              ],
              [
                "The Importance of Social Media Sharing",
                "John Doe",
                "Apr 16, 2024",
                "Published",
              ],
            ].map(([title, author, date, status], i) => (
              <div
                key={i}
                className="bg-white p-4 rounded shadow hover:shadow-md transition hover:scale-105"
              >
                <h3 className="text-md font-semibold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-600 mt-1">👤 {author}</p>
                <p className="text-sm text-gray-600">📅 {date}</p>
                <span
                  className={`inline-block mt-2 px-2 py-1 rounded-full text-xs font-medium ${
                    status === "Published"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {status}
                </span>
              </div>
            ))}

            <button className="bg-green-600 w-20 p-1 text-center mx-[88%] border-none hover:bg-green-700">
              More <i className="ri-arrow-right-line"></i>{" "}
            </button>
          </div>
        </div>

        
        <div>
          <h2 className="font-semibold mb-2">Categories</h2>
          <table className="min-w-full bg-white rounded shadow">
            <thead>
              <tr className="text-left bg-gray-100">
                <th className="p-2">Category Name</th>
                <th className="p-2"># of Posts</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Technology", 34],
                ["Lifestyle", 18],
                ["Travel", 12],
                ["Food", 10],
              ].map(([name, count], i) => (
                <tr key={i} className="border-t">
                  <td className="p-2">{name}</td>
                  <td className="p-2">{count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="font-semibold mb-2">Comments</h2>
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr className="text-left bg-gray-100">
              <th className="p-2">Post Title</th>
              <th className="p-2">Comment Excerpt</th>
              <th className="p-2">Author</th>
              <th className="p-2">Date</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                "Tips for Writing Engaging Content",
                "This is very informative and helpful!",
                "Jane Smith",
                "Apr 20, 2024",
              ],
              [
                "Tips for Writing Engaging Content",
                "Great Introduction to the topic.",
                "Alico Johnson",
                "Apr 20, 2024",
              ],
              [
                "Creating a Content Calendar",
                "Thank you for sharing this.",
                "Michael Brown",
                "Apr 18, 2024",
              ],
            ].map(([title, excerpt, author, date], i) => (
              <tr key={i} className="border-t">
                <td className="p-2">{title}</td>
                <td className="p-2">{excerpt}</td>
                <td className="p-2">{author}</td>
                <td className="p-2">{date}</td>
                <td className="p-2 space-x-2">
                  <button className="text-gray-600 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  </div>
);

