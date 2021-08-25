import { signIn, signOut, useSession } from 'next-auth/client';
import Footer from '../components/Footer';
import LoginPage from '../components/LoginPage';

export default function Home() {
  const [session, loading] = useSession();

  const data = (user) => {
    var name, email, sid, branch, img;

    name = user.name;
    email = user.email;
    img = user.img;

    var index1 = user.email.indexOf('.');
    var index2 = user.email.indexOf('@');
    branch = user.email.slice(index1+3, index2-2).toUpperCase();
    sid = '';

    return {
      name: name,
      email: email,
      sid: sid,
      branch: branch,
      img: img,
    };
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!session && (
        <>
          <LoginPage />
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.name} <br />
          {console.log(session)}
          Name: {data(session.user).name} <br />
          Email: {data(session.user).email} <br />
          SID: {data(session.user).sid} <br />
          Branch: {data(session.user).branch} <br />
          <img src={data(session.user).img} />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
      <Footer />
    </div>
  );
}
