# Get started with Open Frames

By following the steps you will enhance your Frame with the necessary metadata for Open Frames compatibility, according to this [standard](https://github.com/open-frames/standard). Let's dive in!

**HTML**

```html
<meta property="of:accepts:xmtp" content="vNext" />
```

**OnChainKit**

```jsx
export const metadata: Metadata = {
  title: /*Your frame metadata*/,
  description: /*Your frame metadata*/,
  openGraph: {/*Your frame metadata*/},
  other: {
    ...frameMetadata,
    'of:accepts:xmtp': 'vNext', // Ensure this line is added or updated
  },
};
```

_For comprehensive guidance on integrating Open Frames with OnChainKit, refer to the official [documentation](https://onchainkit.xyz/xmtp/introduction)._

**FramesJS**

```jsx
const handleRequest = frames(async (ctx) => {
  return {
    // ...
    accepts: [
      {
        id: 'farcaster',
        version: 'vNext',
      },
      {
        id: 'xmtp',
        version: 'vNext',
      },
    ],
  };
});
```

_For comprehensive guidance on integrating Open Frames with Framesjs, refer to the official [documentation](https://framesjs.org/reference/js/xmtp)._

**Frog**

Currently, Frog does not officially support Open Frames. However, a temporary solution can be found in this [discussion](https://github.com/wevm/frog/discussions/51) regarding making Frog compatible.

### Next steps

- To add your Frame to the Compatible Frames section, fork the [Awesome-Open-Frames Repo](https://github.com/open-frames/awesome-open-frames), clone it, update the README.md with your Frame, commit and push your changes, then submit a pull request.
- To submit your Frame, access any XMTP app from the [Compatible Applications](https://github.com/open-frames/awesome-open-frames?tab=readme-ov-file#compatible-messaging-apps), connect your Ethereum wallet, and send a DM to `hi.xmtp.eth` with a link to your Frame, indicating its addition to the Compatible Frames section.
