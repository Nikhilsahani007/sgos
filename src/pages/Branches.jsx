/*
export default function Branches() {
const data = [
{
name: 'Siddhartha High School',
addr: 'Near Ganesh Temple, Vanasthalipuram',
phone: '7780197872'
},
{
name: 'Siddhartha Model High School',
addr: 'Kamala Nagar, Vanasthalipuram',
phone: '8309863928'
},
{
name: 'Siddhartha Grammar High School',
addr: 'Vaidehinagar, Vanasthalipuram',
phone: '63015611480'
}
]


return (
<section id="branches" className="px-10 py-20">
<h2 className="text-4xl font-bold mb-10">Branches</h2>
<div className="grid md:grid-cols-3 gap-8">
{data.map((b) => (
<div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg border border-white/20" key={b.name}>
<h3 className="text-2xl font-semibold">{b.name}</h3>
<p className="opacity-80">{b.addr}</p>
<p className="text-yellow-300 mt-1 font-medium">Ph: {b.phone}</p>
</div>
))}
</div>
</section>
)
}
*/