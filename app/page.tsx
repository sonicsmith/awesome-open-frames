import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Learn more',
      action: 'link',
      target: `https://github.com/open-frames/awesome-open-frames`,
    },
    {
      label: 'Add to calendar',
      action: 'link',
      target: `https://xmtp.org/dev-call`,
    },
    {
      label: 'Speakers',
      action: 'link',
      target: `https://xmtplabs.notion.site/Frames-O-Rama-Agenda-0160dca2eb2943c1ac9d32a6c096a546?pvs=4`,
    },
    /*,
    {
      label: 'Go to bounty',
      action: 'link',
      target: `https://github.com/open-frames/awesome-open-frames/blob/main/BOUNTY.md`,
    } /*
    {
      label: 'Bounty Status',
      action: 'post',
    },
    
    src: `${NEXT_PUBLIC_URL}/devcall.png`,*/
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/devcall.png`,
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/prs`,
});

export const metadata: Metadata = {
  title: 'Awesome Open Frame',
  description: 'Interoperable Frames',
  openGraph: {
    title: 'Awesome Open Frame',
    description: 'Interoperable Frames',
    images: [`${NEXT_PUBLIC_URL}/devcall.png`],
  },
  other: {
    ...frameMetadata,
    'of:accepts:xmtp': 'vNext',
  },
};

export default function Page() {
  return (
    <>
      <img src={'/devcall.png'} />
    </>
  );
}
