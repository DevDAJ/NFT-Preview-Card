export default function NFTCard() {
	return (
		<div className='bg-card w-[clamp(250px,_50%,_300px)] aspect-square box-content p-4 rounded-xl text-[18px]'>
			<div className='w-full rounded-xl overflow-clip aspect-square object-contain [background-image:_url("./image-equilibrium.jpg")] bg-contain'>
				<div className='opacity-0 hover:opacity-100 flex justify-center items-center w-full h-full hover:bg-gradient-to-b from-transparent to-black'>
					<object data='./icon-view.svg' type='image/svg+xml' />
				</div>
			</div>
			<h1 className='font-semibold my-4'>Equilibrium #3429</h1>
			<p className='font-light my-2'>
				Our Equilibrium collection promotes balance and calm.
			</p>
			<div className='my-4 flex justify-between items-center flex-wrap text-[1rem] leading-[1rem]'>
				<IconInfo color='text-cyan-300' icon='./icon-ethereum.svg    '>
					0.041 ETH
				</IconInfo>
				<IconInfo icon='./icon-clock.svg'>3 days left</IconInfo>
			</div>
			<div className='after:my-4 after:content-[""] after:block after:h-[1px] after:bg-line'></div>
			<div className='flex items-center text-sm gap-1'>
				<img
					src='./image-avatar.png'
					className='h-7 border rounded-full mr- 2'
					alt='Creator Avatar'
				/>
				<span>Creation of</span>
				<a href='#'>Jules Wyvern</a>
			</div>
		</div>
	);
}

function IconInfo({
	children,
	color,
	icon,
}: {
	children: React.ReactNode;
	color?: string;
	icon?: string;
}) {
	return (
		<span className={`align-middle ${color} font-semibold`}>
			<img src={icon} className='inline-block h-4 align-top pr-1' alt={icon} />
			{children}
		</span>
	);
}
