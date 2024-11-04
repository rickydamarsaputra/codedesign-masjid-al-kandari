import logo from './assets/logo.svg';
import heroBackground from './assets/hero-background.jpg';
import { TiThMenu } from 'react-icons/ti';
import { CiFacebook } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { AiFillTikTok } from 'react-icons/ai';
import { useState } from 'react';

function App() {
	const [isShowMenu, setIsShowMenu] = useState(false);
	const fiturMasjids = [
		{
			img: require('./assets/fitur/1.png'),
			text: 'Imam Hafidz Qur’an dan Menguasai Berbagai Nagham',
		},
		{
			img: require('./assets/fitur/2.png'),
			text: 'Masjid Dilengkapi AC, Memastikan Ruangan Sejuk',
		},
		{
			img: require('./assets/fitur/3.png'),
			text: 'Masjid Terbuka 24 Jam dengan Jaminan Keamanan',
		},
		{
			img: require('./assets/fitur/4.png'),
			text: 'Menggunakan Karpet Terbaik yang Lembut Dipakai Sujud',
		},
	];

	return (
		<>
			{/* HEADER */}
			<header className="relative w-[90vw] lg:w-[80vw] mx-auto pt-[3.438rem] flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-y-5 lg:gap-y-0">
				<div className="flex justify-between items-end w-full">
					<img src={logo} alt="logo" />
					<TiThMenu onClick={() => setIsShowMenu(!isShowMenu)} size={24} className="text-white lg:hidden hover:cursor-pointer" />
				</div>
				<ul className={`absolute lg:relative bottom-[-16rem] lg:bottom-auto ${isShowMenu ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-[2.813rem] bg-white lg:bg-inherit w-full lg:w-auto p-4 lg:p-0 rounded-md lg:rounded-none`}>
					<li>
						<a href="#" className="text-slate-800 lg:text-white capitalize">
							beranda
						</a>
					</li>
					<li>
						<a href="#" className="text-slate-800 lg:text-white capitalize">
							blog
						</a>
					</li>
					<li>
						<a href="#" className="text-slate-800 lg:text-white capitalize">
							kegiatan
						</a>
					</li>
					<li>
						<a href="#" className="text-slate-800 lg:text-white capitalize">
							tentang
						</a>
					</li>
					<li>
						<a href="#" className="text-slate-800 lg:text-white capitalize">
							kontak
						</a>
					</li>
				</ul>
			</header>
			{/* HEADER */}

			{/* HERO SECTION */}
			<section className="flex justify-center items-center mt-[-19.375rem] lg:mt-[-6.25rem]" style={{ backgroundImage: `url(${heroBackground})`, backgroundSize: 'cover' }}>
				<div className="w-[90vw] lg:w-[60vw] mt-[28.75rem] lg:mt-[17.5rem] mb-[13.75rem]">
					<h1 className="text-[2rem] lg:text-[3.75rem] text-white font-extrabold leading-[1.875rem] lg:leading-[3.75rem] text-center">Temukan kedamaian melalui dekat dengan Tuhan</h1>
					<p className="text-[0.875rem] lg:text-[1.125rem] text-white font-normal leading-[0.813rem] lg:leading-[1.625rem] text-center mt-[1.875rem]">
						Masjid bukan hanya sebagai tempat ibadah yang nyaman, tapi juga jadi tempat berbagai kegiatan, memupuk persaudaraan hingga membangkitkan perekonomian, atau tempat apapun yang berkaitan dengan keumatan.
					</p>
					<div className="flex justify-center gap-x-[1.563rem] mt-[2.5rem]">
						<a href="#" className="text-[1rem] font-medium text-white border-[0.125rem] border-white rounded-[0.625rem] px-[1.188rem] py-[0.625rem]">
							Baca Selengkapnya
						</a>
						<a href="#" className="flex items-center gap-x-[0.188rem] text-[1rem] font-medium bg-white border-[0.125rem] rounded-[0.625rem] px-[1.188rem] py-[0.625rem]">
							<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M1.69842 13.2657L1.11806 13.5108L1.11807 13.5108L1.69842 13.2657ZM1.8938 15.209L1.28521 15.0462L1.28521 15.0462L1.8938 15.209ZM1.04001 18.4L0.431417 18.2372C0.373262 18.4545 0.435435 18.6864 0.594531 18.8455C0.753626 19.0046 0.985493 19.0668 1.20284 19.0086L1.04001 18.4ZM4.23098 17.5462L4.06816 16.9376L4.06814 16.9376L4.23098 17.5462ZM5.1325 17.3756L5.08894 18.0041L5.08919 18.0041L5.1325 17.3756ZM6.17438 17.7416L5.92924 18.322L5.92929 18.322L6.17438 17.7416ZM7.30564 9.40831L7.79635 9.80341L7.79636 9.80341L7.30564 9.40831ZM8.02503 8.15894L8.65395 8.19583L8.65397 8.19545L8.02503 8.15894ZM7.76068 6.29549L7.13828 6.39303L7.13828 6.39305L7.76068 6.29549ZM5.94137 5.90863L5.67962 5.33558L5.67961 5.33558L5.94137 5.90863ZM5.26451 6.75536L4.64788 6.62625L4.64788 6.62626L5.26451 6.75536ZM5.33038 7.54023L5.94491 7.40146L5.94491 7.40146L5.33038 7.54023ZM7.69237 11.7476L7.24689 12.1931L7.2469 12.1931L7.69237 11.7476ZM11.8998 14.1096L12.0386 13.4951L12.0385 13.4951L11.8998 14.1096ZM12.6847 14.1755L12.5556 13.5588L12.5556 13.5589L12.6847 14.1755ZM13.5314 13.4986L14.1044 13.7604L14.1045 13.7603L13.5314 13.4986ZM13.1445 11.6793L13.0469 12.3017L13.047 12.3017L13.1445 11.6793ZM11.281 11.415L11.2445 10.786L11.2442 10.7861L11.281 11.415ZM10.0317 12.1344L10.4268 12.6251L10.4268 12.6251L10.0317 12.1344ZM9.44001 19.03C14.4271 19.03 18.47 14.9871 18.47 10H17.21C17.21 14.2912 13.7312 17.77 9.44001 17.77V19.03ZM18.47 10C18.47 5.01287 14.4271 0.970006 9.44001 0.970006V2.23001C13.7312 2.23001 17.21 5.70875 17.21 10H18.47ZM9.44001 0.970006C4.45287 0.970006 0.410009 5.01287 0.410009 10H1.67001C1.67001 5.70875 5.14875 2.23001 9.44001 2.23001V0.970006ZM0.410009 10C0.410009 11.244 0.661896 12.4307 1.11806 13.5108L2.27878 13.0206C1.88696 12.0928 1.67001 11.0726 1.67001 10H0.410009ZM1.11807 13.5108C1.23773 13.7941 1.3184 13.9855 1.37227 14.1327C1.42722 14.2827 1.43495 14.337 1.43592 14.351L2.69291 14.264C2.67937 14.0684 2.62126 13.8791 2.55542 13.6994C2.48851 13.5166 2.39343 13.292 2.27877 13.0205L1.11807 13.5108ZM1.43592 14.351C1.44138 14.4299 1.42142 14.5371 1.28521 15.0462L2.50239 15.3719C2.61301 14.9584 2.71647 14.6045 2.69291 14.264L1.43592 14.351ZM1.28521 15.0462L0.431417 18.2372L1.6486 18.5628L2.50239 15.3719L1.28521 15.0462ZM1.20284 19.0086L4.39381 18.1548L4.06814 16.9376L0.877173 17.7914L1.20284 19.0086ZM4.39379 18.1548C4.90296 18.0186 5.01011 17.9987 5.08894 18.0041L5.17607 16.7471C4.8356 16.7235 4.4815 16.8271 4.06816 16.9376L4.39379 18.1548ZM5.08919 18.0041C5.10309 18.0051 5.1573 18.0128 5.30735 18.0677C5.45446 18.1216 5.6459 18.2023 5.92924 18.322L6.41953 17.1613C6.14805 17.0466 5.92338 16.9515 5.74066 16.8846C5.56089 16.8187 5.37158 16.7606 5.17582 16.7471L5.08919 18.0041ZM5.92929 18.322C7.00932 18.7781 8.19602 19.03 9.44001 19.03V17.77C8.36745 17.77 7.34721 17.553 6.41948 17.1612L5.92929 18.322ZM7.06476 10.712L7.79635 9.80341L6.81493 9.01321L6.08334 9.92184L7.06476 10.712ZM7.79636 9.80341C7.90898 9.66353 8.13556 9.4119 8.28942 9.18738C8.46303 8.93406 8.62983 8.60702 8.65395 8.19583L7.39611 8.12206C7.39032 8.22078 7.3516 8.32695 7.25007 8.47509C7.12881 8.65204 7.01064 8.77014 6.81493 9.01321L7.79636 9.80341ZM8.65397 8.19545C8.65947 8.10072 8.64771 7.98742 8.63834 7.90495C8.62695 7.80465 8.60954 7.67645 8.58708 7.52197C8.54209 7.21241 8.47346 6.77449 8.38308 6.19793L7.13828 6.39305C7.22918 6.97292 7.29646 7.40234 7.34019 7.7032C7.36209 7.85393 7.37725 7.96671 7.3864 8.0472C7.39757 8.14549 7.39433 8.15277 7.39609 8.12244L8.65397 8.19545ZM8.38308 6.19795C8.31049 5.73473 8.02679 5.43922 7.68259 5.29579C7.39445 5.17572 7.08271 5.17001 6.8976 5.17001V6.43001C6.9801 6.43001 7.04708 6.43248 7.10352 6.43916C7.1608 6.44593 7.18886 6.45507 7.19792 6.45884C7.20341 6.46113 7.18284 6.4533 7.16023 6.42572C7.13614 6.39633 7.13564 6.37623 7.13828 6.39303L8.38308 6.19795ZM6.8976 5.17001C6.4645 5.17001 6.06858 5.15791 5.67962 5.33558L6.20312 6.48168C6.28976 6.4421 6.37279 6.43001 6.8976 6.43001V5.17001ZM5.67961 5.33558C5.41404 5.45689 5.18807 5.66299 5.02352 5.86883C4.85898 6.07467 4.70772 6.34049 4.64788 6.62625L5.88114 6.88448C5.88902 6.84682 5.92591 6.75791 6.00772 6.65556C6.08954 6.55321 6.16814 6.49766 6.20312 6.48167L5.67961 5.33558ZM4.64788 6.62626C4.5621 7.03599 4.64004 7.34324 4.71586 7.67899L5.94491 7.40146C5.86146 7.03191 5.85977 6.98652 5.88114 6.88447L4.64788 6.62626ZM4.71586 7.67899C5.08085 9.29538 5.93414 10.8803 7.24689 12.1931L8.13785 11.3022C6.98996 10.1542 6.25635 8.78069 5.94491 7.40146L4.71586 7.67899ZM7.2469 12.1931C8.55969 13.5059 10.1446 14.3592 11.761 14.7242L12.0385 13.4951C10.6593 13.1837 9.28578 12.4501 8.13785 11.3021L7.2469 12.1931ZM11.761 14.7241C12.0968 14.8 12.404 14.8779 12.8138 14.7921L12.5556 13.5589C12.4535 13.5802 12.4081 13.5785 12.0386 13.4951L11.761 14.7241ZM12.8138 14.7921C13.0995 14.7323 13.3653 14.581 13.5712 14.4165C13.777 14.2519 13.9831 14.026 14.1044 13.7604L12.9584 13.2368C12.9423 13.2719 12.8868 13.3505 12.7844 13.4323C12.6821 13.5141 12.5932 13.551 12.5556 13.5588L12.8138 14.7921ZM14.1045 13.7603C14.2821 13.3714 14.27 12.9756 14.27 12.5424H13.01C13.01 13.0672 12.9979 13.1502 12.9583 13.2369L14.1045 13.7603ZM14.27 12.5424C14.27 12.3573 14.2643 12.0456 14.1442 11.7574C14.0008 11.4132 13.7052 11.1295 13.242 11.0569L13.047 12.3017C13.0638 12.3044 13.0437 12.3039 13.0143 12.2798C12.9867 12.2572 12.9789 12.2366 12.9812 12.2421C12.9849 12.2512 12.9941 12.2792 13.0009 12.3365C13.0075 12.3929 13.01 12.4599 13.01 12.5424H14.27ZM13.2421 11.0569C12.6655 10.9666 12.2276 10.8979 11.918 10.8529C11.7636 10.8305 11.6354 10.8131 11.5351 10.8017C11.4526 10.7923 11.3393 10.7805 11.2445 10.786L11.3175 12.0439C11.2872 12.0457 11.2945 12.0425 11.3928 12.0536C11.4733 12.0628 11.5861 12.0779 11.7368 12.0998C12.0377 12.1436 12.4671 12.2108 13.0469 12.3017L13.2421 11.0569ZM11.2442 10.7861C10.833 10.8102 10.506 10.977 10.2526 11.1506C10.0281 11.3045 9.77651 11.531 9.63659 11.6437L10.4268 12.6251C10.6699 12.4294 10.788 12.3112 10.9649 12.1899C11.1131 12.0884 11.2192 12.0497 11.3179 12.0439L11.2442 10.7861ZM9.63662 11.6436L8.72799 12.3752L9.51816 13.3566L10.4268 12.6251L9.63662 11.6436Z"
									fill="#0C0C0C"
								/>
							</svg>
							Hubungi Kami
						</a>
					</div>
				</div>
			</section>
			{/* HERO SECTION */}

			{/* FITUR SECTION */}
			<section className="relative bg-white py-[9.063rem]">
				<img src={require('./assets/ellipse-element.png')} alt="ellipse-element" className="absolute top-[-30rem] left-[-45rem] opacity-50" />
				<div className="w-[90vw] lg:w-[65vw] mx-auto">
					<h2 className="uppercase text-center text-[1.125rem] font-bold text-[#165648]">Fitur</h2>
					<h1 className="text-center text-[2.5rem] lg:text-[3.125rem] leading-[2.813rem] lg:leading-[3.313rem] font-extrabold text-[#0C0C0C] mt-2">
						Semua Kenyamanan <br /> dalam Satu Masjid
					</h1>
					<div className="flex flex-col lg:flex-row justify-center gap-y-4 lg:gap-y-0 gap-x-[1.125rem] mt-[2.625rem]">
						{fiturMasjids.map(({ img, text }) => (
							<div className="flex flex-col items-center">
								<img src={img} alt={text} />
								<h1 className="text-center text-[1.125rem] font-medium mt-4">{text}</h1>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* FITUR SECTION */}

			{/* KEGIATAN SECTION */}
			<section className="relative bg-white py-[9.063rem]">
				<img src={require('./assets/ellipse-element.png')} alt="ellipse-element" className="absolute bottom-[-30rem] right-[-45rem] opacity-50" />
				<div className="w-[90vw] mx-auto bg-[#165648] py-[2.5rem] px-[2rem] lg:px-[7.25rem] rounded-[0.625rem]">
					<h2 className="uppercase text-center text-[1.125rem] font-bold text-[#F5F6F8]">Kegiatan</h2>
					<h1 className="text-center text-[2.5rem] lg:text-[3.125rem] leading-[2.813rem] lg:leading-[3.313rem] font-extrabold text-[#F5F6F8] mt-2">
						Berbagai Kegiatan Menarik <br /> Yang Tersedia di Masjid
					</h1>
					<div className="grid lg:grid-cols-3 gap-[1.875rem] mt-[2.625rem]">
						<div className="bg-white rounded-[0.625rem] p-[1.563rem]">
							<h1 className="text-[1.666rem] leading-[1.85rem] font-extrabold mt-4">
								Kajian Fiqih, Kajian Ibadah 4 Madzhab <br /> dan Belajar Ngaji
							</h1>
							<p className="text-[0.803rem] leading-[0.988rem] font-normal mt-[0.688rem]">Di setiap harinya, masjid akan melaksanakan banyak kegiatan keislaman, terbuka untuk masyarakat sekitar dan untuk umum.</p>
							<img src={require('./assets/kegiatan/1.jpg')} alt="Kajian Fiqih, Kajian Ibadah 4 Madzhab dan Belajar Ngaji" className="w-full mt-[1.75rem]" />
						</div>
						<div className="bg-white rounded-[0.625rem] p-[1.563rem]">
							<h1 className="text-[1.666rem] leading-[1.85rem] font-extrabold mt-4">
								Sembako Gratis <br /> dan Santunan <br /> Terhadap Dhuafa
							</h1>
							<p className="text-[0.803rem] leading-[0.988rem] font-normal mt-[0.688rem]">
								Tersedia paket sembako gratis dan juga rutin melaksanakan kegiatan santunan terhadap <br /> dhuafa.
							</p>
							<img src={require('./assets/kegiatan/2.jpg')} alt="Sembako Gratis dan Santunan Terhadap Dhuafa" className="w-full mt-[1.75rem]" />
						</div>
						<div className="bg-white rounded-[0.625rem] p-[1.563rem]">
							<h1 className="text-[1.666rem] leading-[1.85rem] font-extrabold mt-4">
								Pendidikan dan <br /> Pelatihan <br /> Kewirausahaan
							</h1>
							<p className="text-[0.803rem] leading-[0.988rem] font-normal mt-[0.688rem]">
								Masjid rutin membina jama’ah di segala usia <br /> agar memiliki keterampilan dan minat belajar <br /> yang tinggi demi masa depan yang cerah.
							</p>
							<img src={require('./assets/kegiatan/3.jpg')} alt="Pendidikan dan Pelatihan Kewirausahaan" className="w-full mt-[1.75rem]" />
						</div>
					</div>
				</div>
			</section>
			{/* KEGIATAN SECTION */}

			{/* FOTO SECTION */}
			<section className="py-[9.063rem]">
				<div className="w-[90vw] lg:w-[65vw] mx-auto">
					<h2 className="uppercase text-center text-[1.125rem] font-bold text-[#165648]">Foto</h2>
					<h1 className="text-center text-[2.5rem] lg:text-[3.125rem] leading-[2.813rem] lg:leading-[3.313rem] font-extrabold text-[#0C0C0C] mt-2">
						Menjelajahi Keindahan <br /> Masjid Dari Berbagai Sisi
					</h1>
					<img src={require('./assets/foto/photo-grid.png')} alt="photo-grid" className="mt-[2.625rem]" />
				</div>
			</section>
			{/* FOTO SECTION */}

			{/* LOKASI SECTION */}
			<section className="pb-[9.063rem]">
				<div className="w-[90vw] lg:w-[65vw] mx-auto">
					<h2 className="uppercase text-center text-[1.125rem] font-bold text-[#165648]">Lokasi</h2>
					<h1 className="text-center text-[2.5rem] lg:text-[3.125rem] leading-[2.813rem] lg:leading-[3.313rem] font-extrabold text-[#0C0C0C] mt-2">Lokasi Masjid Mudah Diakses</h1>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1012730.8548755752!2d111.6530531029889!3d-7.467470604532606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fba9cfb6dfab%3A0x6fe7210ef241206!2sal-Akbar%20National%20Mosque%20Surabaya!5e0!3m2!1sen!2sid!4v1730698632796!5m2!1sen!2sid"
						style={{ border: 0 }}
						className="w-full h-[21.813rem] mt-[2.625rem]"
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					/>
				</div>
			</section>
			{/* LOKASI SECTION */}

			{/* FOOTER */}
			<footer className="bg-[#165648] py-[2rem]">
				<div className="w-[85vw] mx-auto grid lg:grid-cols-4 lg:gap-x-[6.25rem] gap-y-4 lg:gap-y-0">
					<div>
						<img src={logo} alt="logo" />
						<p className="text-[0.875rem] text-[#F5F6F8] mt-[1.5rem]">Masjid ini memiliki desain arsitektur indah dan fasilitas lengkap, menyediakan lingkungan yang nyaman untuk ibadah dan kegiatan komunitas.</p>
						<div className="flex gap-x-[0.625rem] mt-[1.125rem]">
							<a href="#" className="w-[27px] h-[27px] flex justify-center items-center rounded-[10px] bg-white">
								<CiFacebook />
							</a>
							<a href="#" className="w-[27px] h-[27px] flex justify-center items-center rounded-[10px] bg-white">
								<FaInstagram />
							</a>
							<a href="#" className="w-[27px] h-[27px] flex justify-center items-center rounded-[10px] bg-white">
								<AiFillTikTok />
							</a>
						</div>
					</div>
					<div>
						<h1 className="text-[1rem] text-[#F5F6F8] font-extrabold">Halaman</h1>
						<ul className="space-y-[0.625rem] mt-3">
							<li>
								<a href="#" className="text-[0.875rem] text-[#F5F6F8] font-normal">
									Beranda
								</a>
							</li>
							<li>
								<a href="#" className="text-[0.875rem] text-[#F5F6F8] font-normal">
									Blog
								</a>
							</li>
							<li>
								<a href="#" className="text-[0.875rem] text-[#F5F6F8] font-normal">
									Kegiatan
								</a>
							</li>
							<li>
								<a href="#" className="text-[0.875rem] text-[#F5F6F8] font-normal">
									Tentang
								</a>
							</li>
							<li>
								<a href="#" className="text-[0.875rem] text-[#F5F6F8] font-normal">
									Kontak
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h1 className="text-[1rem] text-[#F5F6F8] font-extrabold">Kegiatan</h1>
						<ul className="space-y-[0.625rem] mt-3">
							<li>
								<a href="#" className="text-[0.875rem] text-[#F5F6F8] font-normal">
									Kajian Fiqih
								</a>
							</li>
							<li>
								<a href="#" className="text-[0.875rem] text-[#F5F6F8] font-normal">
									Kajian Ibadah 4 Madzhab
								</a>
							</li>
							<li>
								<a href="#" className="text-[0.875rem] text-[#F5F6F8] font-normal">
									Santunan Dhuafa
								</a>
							</li>
							<li>
								<a href="#" className="text-[0.875rem] text-[#F5F6F8] font-normal">
									Pelatihan Kewirausahaan
								</a>
							</li>
							<li>
								<a href="#" className="text-[0.875rem] text-[#F5F6F8] font-normal">
									Belajar Ngaji
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h1 className="text-[1rem] text-[#F5F6F8] font-extrabold">Kontak</h1>
						<ul className="space-y-[0.625rem] mt-3">
							<li className="text-[0.875rem] text-[#F5F6F8] font-normal">
								081234567890 <span className="font-bold">(WA)</span>
							</li>
							<li className="text-[0.875rem] text-[#F5F6F8] font-normal">
								987F1D6L <span className="font-bold">(PIN BBM)</span>
							</li>
							<li className="text-[0.875rem] text-[#F5F6F8] font-normal">
								087634561234 <span className="font-bold">(Telegram)</span>
							</li>
						</ul>
					</div>
				</div>
				<p className="text-center text-[0.875rem] text-[#F5F6F8] font-semibold mt-[6.25rem]">© 2024 Masjid Al-Kandari All Rights Reserved</p>
			</footer>
			{/* FOOTER */}
		</>
	);
}

export default App;
