export default function defineScmDetails({host, owner, name}) {
  return {
    connection: `scm:git:git://${host}/${owner}/${name}.git`,
    developerConnection: `scm:git:ssh://${host}/${owner}/${name}.git`,
    tag: 'HEAD',
    url: `https://${host}/${owner}/${name}`
  };
}
