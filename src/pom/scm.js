export default function defineScmDetails({host, owner, name}) {
  return {
    tag: 'HEAD',
    url: `https://${host}/${owner}/${name}`
  };
}
