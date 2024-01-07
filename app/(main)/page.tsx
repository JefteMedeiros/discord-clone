import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <p className='text-3xl text-indigo-500'>This is a protected route</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}
