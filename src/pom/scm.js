export default function defineScmDetails({host, owner, name}) {
  return {
    connection: `scm:git:https://${host}/${owner}/${name}.git`,
    developerConnection: `scm:git:https://${host}/${owner}/${name}.git`,
    tag: 'HEAD',
    url: `https://${host}/${owner}/${name}`
  };
}
