import { ReactNode } from "react";

const AuthLayout = ({ children }: {children: ReactNode}) => {
  return ( 
    <div className="bg-red-500">{ children }</div>
   );
}
 
export default AuthLayout;