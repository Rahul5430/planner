import { signIn, signOut, useSession } from 'next-auth/client';
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';

const Account = () => {
    const [session, loading] = useSession();

    const data = (user) => {
        var name, email, sid, branch, img;
    
        name = user.name;
        email = user.email;
        img = user.image;
    
        var index1 = user.email.indexOf('.');
        var index2 = user.email.indexOf('@');
        branch = user.email.slice(index1+3, index2-2).toUpperCase();
        sid = (user.name).startsWith('bt2') ? (user.name).slice(2, 10) : '';
    
        return {
            name: name,
            email: email,
            sid: sid,
            branch: branch,
            image: img,
        };
    };

    return (
        <>
            {session &&
                <>
                    <NavBar user={data(session.user)} />
                    <div>Account</div>
                    <Footer />
                </>
            }
        </>
    );
};

export default Account;