# DataStory Country Statistics

This is a next.js app for fetching country specific population statistics.
I'll use the readme to summarize my approach,
and keep the original readme from next.js as the run/build steps should be the same.

## Getting Started (with development)

First I have read through the assignment to see what was to be expected.

### UI Library

I had never worked with Charka or Ant, but I briefly went over the documentation of Chakra and it seemed reasonable in it's usage.

### Data visualisation

It's been a while since I used a package for data visualization, but actually chosing one, I can't even remember. I took a quick look online (and actually looked at some blog posts from datastory and saw you were using echarts). It was easy to implement, so I used these for now.

### GraphQL client

Where I had some time to think about what to use for GraphQL client. I was very tempted to just use `fetch` as next.js will handle caching for me.
For now I ended up using `graphql-request` it allows adding generic for types which is managable on a small project. For larger projects I'd likely choose apollo due to the features it brings. I ended up actually getting a bit stuck here since there is an intention to rename the library and change it's behaviour, the documentation for that was confusing.
Eventually I installed a stable version.
I would have liked to spend a bit more time reading into which libraries are out there nowadays and perhaps change my decision later.

## Page structure

My Idea for structuring the project was a homepage with a list of countries, ideally with flag, the country specific pages can then be accessed through /iso2 (I ended up using id for conveinence). Then on that page I'd like to put a dropdown which could have autocompletion to jump to a different country).

## What Did I implement

I focused on fetching data first, so I created a very bare bones homepage which loads the country, this seemed a sensible landing page.

Next I created a details page which shows the 3 suggested graph types for the country. This is also a very bare bones page as I focused on fetching data.

## What did I choose not to implement

I would say I din't want to skip anything, but I focused on a working application over a pretty application, so I chose to not focus on UI and UX.

## Things I would do next

- Fix the layout up a little, Add some titles, means to navigate to home, make the links on the homepage easier to locate with flags. And of course improve so the website is actually responsive (and still usable)
- Cache all the data, since the data is year specific we could cache everything for a long time. at this time, I would suggest just statically generate all the pages since it's yearly data. (Unless we want to mix data, which is something I think could be fun to compare).
- As mentioned in the previous bullet, I think it could be fun to compare countries, I'd have to rethink my routing, though it could just be a queryparam /sweden?compareWith=poland,finland for example.
- Metadata, something completely lacking besides the layout is stuff like titles and metadata.
- Year filters, there are 70 datapoints now, it could be useful to limit these, we could add this to the query or simply filter the cached data (I would suggest the later since the dataset is not huge).
- Enhance the Charts, currently it's not obvious what the axises represent, they could use labels at least.
- Testing, while I don't see a lot of test cases that are very worth it right now except perhaps checking if the graphs render the expected data. I did not test if a production build works. This means I also didn't do proper type checking etc. which is build into next.js.
- Setup linting/formatting better I reinstalled my desktop recently, I didn't have node installed this morning. I had to configure typescript in NeoVim. So I could probably improve a little bit to have my IDE format the project slightly better. Don't get upset if you see a mix of single and double quotes ;-).

> Note: In a real world scenario I'd likely spend more time doing some research on what to use and where, of course a lot would already have been decided or be more straightforward by using tooling which is used in other projects.

## Original Next.js Readme below
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
>>>>>>> 6254fb2 (feat: Implement home/detail page and data fetching)
