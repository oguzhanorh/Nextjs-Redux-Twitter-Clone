import NextAuth from 'next-auth';

import CrendentialProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CrendentialProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'username', placeholder: 'Kullanıcı adı' },
        password: { label: 'password', placeholder: 'Şifre' },
      },
      async authorize(credentials) {
        if (
          credentials.username === 'oguz' &&
          credentials.password === 'test'
        ) {
          return {
            id: 5,
            name: 'Oguz',
            surname: 'Orham',
            email: 'iletisim@oguzorhan.com',
            gender: 'Male',
            is_active: true,
          };
        } else {
          throw Error('Hatalı kullanıcı adı veya şifre');
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, account }) => {
      if (user) {
        const accessToken = '...';
        token.data = {
          id: user.id,
          name: user.name,
          gender: user.gender,
        };
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.user = token.data;
      }
      return session;
    },
  },
  session: {
    jwt: true,
    maxAge: 60 * 30,
    updateAge: 60 * 5,
  },
  secret: 'deneme123',
  jwt: {
    secret: 'deneme123',
    encryption: true,
  },
  pages: {
    signIn: '/auth/login',
  },
});
