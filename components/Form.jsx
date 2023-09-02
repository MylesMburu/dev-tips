import Link from 'next/link';
import React from 'react'

const Form = ({type, post, setPost, submitting, handleSubmit}) => {
  return (
    <section>
        <h1 className='blue_gradient font-bold text-2xl'>{type} Post</h1>
        <p className='desc'>Start sharing your tips with the world. Talk nerdy!!</p>
        <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-3 glassmorphism p-5 rounded-lg'
        >
            <label htmlFor="">
                <span className='font-bold'>Tip</span>
                <textarea 
                value={post.tip}
                onChange={(e) => setPost({ ...post, tip: e.target.value })}
                placeholder='Write your tip here...'
                required
                className='form_textarea'
                />
            </label>
            <label htmlFor="">
                <span className='font-bold'>Tag</span>
                <input 
                value={post.tip}
                onChange={(e) => setPost({ ...post, tag: e.target.value })}
                placeholder='#tag'
                required
                className='form_input'
                />
            </label>
            <div className='flex-end mx-3 mb-4 gap-4'>
                <Link href='/' className='bg-red-500 text-white px-3 py-1 rounded-md'>
                    Cancel
                </Link>
                <button
                type='submit'
                disabled={submitting}
                className='bg-blue-500 text-white px-3 py-1 rounded-md'
                >
                    {submitting ? `${type}...` : type}
                </button>
            </div>
        </form>
    </section>
  )
}
export default Form;