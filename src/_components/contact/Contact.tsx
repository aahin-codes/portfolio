'use client'
import Styles from '@/_components/contact/Contact.module.scss'
import Link from 'next/link';
import { forwardRef, useState } from 'react';
import { IoIosMail } from "react-icons/io";
import { FaLinkedin, FaGithub, FaLongArrowAltRight } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

type FormData = {
    name: string
    email: string
    subject: string
    message: string
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';
const EJS = {
    serviceId: process.env.NEXT_PUBLIC_EJS_SERVICE_ID!,
    templateId: process.env.NEXT_PUBLIC_EJS_TEMPLATE_ID!,
    publicKey: process.env.NEXT_PUBLIC_EJS_PUBLIC_KEY!,
}

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
    const [status, setStatus] = useState<SubmitStatus>('idle');
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<FormData>()

    const onSubmit = async (data: FormData) => {

        setStatus('loading')
        try {
            await emailjs.send(
                EJS.serviceId,
                EJS.templateId,
                {
                    from_name: data.name,
                    from_email: data.email,
                    subject: data.subject,
                    message: data.message,
                },
                EJS.publicKey
            )
            console.log(data);
            setStatus('success')
            reset()                          // clear form after success
        } catch {
            setStatus('error')
        }
    }
    return (
        <div className={Styles.contactContainer} ref={ref}>
            <div className={Styles.wrapper}>
                <span className={Styles.dot}>let's connect</span>
                <h2>Start a conversation</h2>
                <section>
                    <div className={Styles.wrapper}>
                        <div className={Styles.left}>
                            <div className={Styles.alertBox}>
                                <p><span>Available for work</span><span>Responds within 24hrs</span></p>
                            </div>
                            <p>Looking for a developer who can take your idea
                                from <span>wireframe to production?</span> Let's talk.</p>
                            <p>Whether it's a full-time role, freelance project,
                                or just a coffee chat — my inbox is open.</p>
                            <div className={Styles.card}>
                                <IoIosMail />
                                <span>email</span>
                                <p>aahin2001@gmail.com</p>
                                <Link href={'mailto:aahin2001@gmail.com'} target='_blank' rel='noreffer nofollow noopener'></Link>
                            </div>
                            <div className={Styles.card}>
                                <FaLinkedin />
                                <span>linkedin</span>
                                <p>linkedin.com/in/aahin-k</p>
                                <Link href={'https://linkedin.com/in/aahin-k'} target='_blank' rel='noreffer nofollow noopener'></Link>
                            </div>
                            <div className={Styles.card}>
                                <FaGithub />
                                <span>github</span>
                                <p>github.com/aahin-codes</p>
                                <Link href={'https://github.com/aahin-codes'} target='_blank' rel='noreffer nofollow noopener'></Link>
                            </div>
                        </div>
                        <div className={Styles.right}>
                            <fieldset>
                                <legend>Send a message</legend>
                                {status === 'success' ? (
                                    <div className={Styles.successBox}>
                                        <span><TiTick /></span>
                                        <h3>Message sent!</h3>
                                        <p>Thanks for reaching out. I'll get back to you within 24hrs.</p>
                                        <button onClick={() => setStatus('idle')}>
                                            send another
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                                        <div className={Styles.box}>
                                            <label htmlFor="name">your name</label>
                                            <input type="text" id='name' placeholder='Sheik' {...register('name', {
                                                required: 'Name is required',
                                                minLength: { value: 2, message: 'Min 2 characters' }
                                            })} />
                                            {errors.name && (
                                                <span className={Styles.error}>
                                                    {errors.name.message}
                                                </span>
                                            )}

                                        </div>
                                        <div className={Styles.box}>
                                            <label htmlFor="email">email address</label>
                                            <input type="email" id='email' placeholder='sa@me.com' {...register('email', {
                                                required: 'Email is required',
                                                pattern: {
                                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                    message: 'Enter a valid email'
                                                }
                                            })} />
                                            {errors.email && (
                                                <span className={Styles.error}>
                                                    {errors.email.message}
                                                </span>
                                            )}
                                        </div>
                                        <div className={`${Styles.box} ${Styles['box-full-wd']}`}>
                                            <label htmlFor="subject">project type</label>
                                            <select id="subject" {...register('subject', {
                                                required: 'Please select a type'
                                            })}>


                                                <option value="">Choose your requirements</option>
                                                <option value="Full time opportunity">Full time opportunity</option>
                                                <option value="Consulting">Consulting</option>
                                                <option value="Freelancing">Freelancing</option>
                                                <option value="Just saying hi">Just saying hi</option>
                                            </select>
                                            {errors.subject && (
                                                <span className={Styles.error}>
                                                    {errors.subject.message}
                                                </span>
                                            )}

                                        </div>
                                        <div className={`${Styles.box} ${Styles['box-full-wd']}`}>
                                            <label htmlFor="message">your message</label>
                                            <textarea id="message" placeholder='Tell me about your project or opportunity...' {...register('message', {
                                                required: 'Message is required',
                                                minLength: { value: 20, message: 'Min 20 characters please' }
                                            })}
                                            ></textarea>{errors.message && (
                                                <span className={Styles.error}>
                                                    {errors.message.message}
                                                </span>
                                            )}
                                        </div>
                                        {/* error sending */}
                                        {status === 'error' && (
                                            <span className={Styles.error}>
                                                Something went wrong. Try emailing me directly.
                                            </span>
                                        )}
                                        <button type="submit"
                                            disabled={status === 'loading'}>{status === 'loading'
                                                ? 'sending...'
                                                : <> send message <FaLongArrowAltRight /> </>
                                            }</button>
                                    </form>)}
                                <p>// no spam <span>&middot;</span> no cold sales <span>&middot;</span> human responses only</p>
                            </fieldset>
                        </div>
                    </div>
                </section>
            </div >
        </div >
    )
})

export default Contact;




