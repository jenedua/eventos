export interface InformacaoProps {
    label: string
    children?: any
}
export default function Informacao(props: InformacaoProps) {
    return (
        <div className="flex-1 flexflex-col items-start border border-zinc-800 px-6 py-4 rounded-lg">
            <span className="text-zinc-400 font-bold">{props.label}</span>
            <span className="text-xl">{props.children}</span>
        </div>
    )

}