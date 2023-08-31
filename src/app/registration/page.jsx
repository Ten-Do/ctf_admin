'use client'
import Image from 'next/image';
import styles from './styles.module.css';
import { useRef } from 'react';
import checkSvg from './../../../public/assets/ui/checkbox.svg';


const Registration = () => {

	let fileChange = () => {
		console.log(document.getElementById('file-input').files[0])
		if (document.getElementById('file-input').files[0]){
			fileNameRef.current.innerHTML = document.getElementById('file-input').files[0].name;
		} else {
			fileNameRef.current.innerHTML = "Студенческий билет";
		}
	}

	const selectRef = useRef(null);
	let fileRef = useRef(null);
	let fileNameRef = useRef(null);

	let expanded = false;

	let showCheckboxes = () => {
		if (!expanded) {
			selectRef.current.style.display = "block";
			expanded = true;
		} else {
			selectRef.current.style.display = "none";
			expanded = false;
		}
	};


	return (
		<div className={styles.fixed_container}>
			<div className={styles.form}>
				<iframe name="votar" className={styles.vvotar}></iframe>
				<h1>Регистрация</h1>
				<form className={styles.forma} name="forma" target="votar">
					<label className={styles.form_label}>Email</label>
					<input className={styles.normal_input} id='email' type="email" name="email" required size="40" placeholder="Введите Email... " />
					<label className={styles.form_label}>ФИО</label>
					<input className={styles.normal_input} id='name' type="text" required size="40" name="name" placeholder="Введите ФИО..." />
					<label className={styles.form_label}>Пароль</label>
					<input className={styles.normal_input} id='password' type="password" name="password" required size="40" placeholder="Введите пароль..." />
					<label className={styles.form_label}>Пароль</label>
					<input className={styles.normal_input} id='second-pass' type="password" required size="40" placeholder="Подтвердите пароль..." />
					<label className={styles.form_label}>Категории CTF</label>
					<div className={styles.multiselect}>
						<div className={styles.selectBox}  onClick={showCheckboxes}>
							<select>
								<option>Выберите категории CTF...</option>
							</select>
							<div className={styles.overSelect}></div>
						</div>
						<div className={styles.checkboxes} ref={selectRef}>
							<label for="admin">
								<input type="checkbox" id="admin" />
								<span className={styles.fake}></span>
								Admin</label>
							<label for="reverse">
								<input type="checkbox" id="reverse" />
								<span className={styles.fake}></span>
								Reverse/PWN, Binary, Vuln</label>
							<label for="stegano">
								<input type="checkbox" id="stegano" />
								<span className={styles.fake}></span>
								Stegano</label>
							<label for="ppc">
								<input type="checkbox" id="ppc" />
								<span className={styles.fake}></span>
								Ppc</label>
							<label for="forensic">
								<input type="checkbox" id="forensic" />
								<span className={styles.fake}></span>
								Forensic</label>
							<label for="crypto">
								<input type="checkbox" id="crypto" />
								<span className={styles.fake}></span>
								Crypto</label>
							<label for="web">
								<input type="checkbox" id="web" />
								<span className={styles.fake}></span>
								Web</label>
							<label for="network">
								<input type="checkbox" id="network" />
								<span className={styles.fake}></span>
								Network</label>
							<label for="osint">
								<input type="checkbox" id="osint" />
								<span className={styles.fake}></span>
								Osint</label>
						</div>
					</div>
					<div className={styles.file_input_container}>
						<input ref={fileRef} onChange={fileChange} id='file-input' className={styles.file_input} type="file" name="img" accept="image/*" />
						<label className={styles.form_label_file + ' ' + styles.reg_file_input} for="file-input">
							<span ref={fileNameRef}>Студенческий билет</span>
							<div className={styles.stud_logo_container}>
								<div className='svg_container'>
								<Image className={styles.stud_bilet_logo} src={'/assets/ui/add.svg'} alt={'plusLogo'} width={37} height={37} />
								</div>
							</div>
						</label>
					</div>
					<button className={styles.button} type="submit" >Зарегистрироваться</button>
				</form>
			</div>
		</div>
	)
}

export default Registration;