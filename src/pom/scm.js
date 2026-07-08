export default function defineScmDetails({host, owner, name}) {
  return {
    tag: 'HEAD',
    ...'github' === host && {url: `https://github.com/${owner}/${name}`}
  };
}
