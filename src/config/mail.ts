interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'etheral',

  defaults: {
    from: {
      email: 'gobarber@mais-app.com',
      name: 'App GoBarber',
    },
  },
} as IMailConfig;
