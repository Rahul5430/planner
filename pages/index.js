import { signIn, signOut, useSession } from 'next-auth/client';
import Footer from '../components/Footer';
import LoginPage from '../components/LoginPage';
import { Spinner } from '@chakra-ui/react';
import NavBar from '../components/NavBar';

export default function Home() {
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
    <div>
      {loading && <p>Loading...</p>}
      {!session && (
          <LoginPage />
      )}
      {session && (
        <>
          {console.log(data(session.user))}
          <NavBar user={data(session.user)} />
          Signed in as {session.user.name} <br />
          {console.log(session)}
          Name: {data(session.user).name} <br />
          Email: {data(session.user).email} <br />
          SID: {data(session.user).sid} <br />
          Branch: {data(session.user).branch} <br />
          <img src={data(session.user).image} />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
      <Footer />
    </div>
  );
}
