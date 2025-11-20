'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const useUser = () => {
   
    const user = true; 
    return user;
};

const LOGIN_ROUTE = '/login'; 

function OrderLayout({ children }) {
    const user = useUser(); 
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push(LOGIN_ROUTE);
        }
    }, [user, router]);

    if (!user) {
        return <div>Loading or Redirecting...</div>;
    }
    return (
        <main>
            {children}
        </main>
    );
}

export default OrderLayout;