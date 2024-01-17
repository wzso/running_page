interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'My Running Records',
  siteUrl: 'https://wzso.github.io/running',
  logo: 'https://avatars.githubusercontent.com/u/15153965?v=4',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Homepage',
      url: 'https://wzso.github.io',
    }
  ],
};

export default data;
