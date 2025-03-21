import * as React from "react"
type TScript = { tag: string; attr: { [x: string]: string } }

export const ScriptTag = ({ tag, attr }: TScript): React.JSX.Element => {
  const T = tag
  // @ts-ignore
  if (attr.noModule === "") return <T {...attr} noModule />
  else return <T {...attr} />
}

export const CherScripts = ({ scripts }: { scripts: TScript[] }): React.JSX.Element => (
  <>{scripts?.map((script, i) => <ScriptTag key={i} {...script} />)}</>
)
