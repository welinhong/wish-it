import Modal from '@/components/Modal/Modal'
import type { NextPage } from 'next'
import { useState } from 'react'

const Home: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleClick = () => {
    setIsModalOpen((prev) => !prev)
  }
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      Home
      <button onClick={handleClick}>show modal</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div>웰린짱</div>
      </Modal>
    </>
  )
}

export default Home
