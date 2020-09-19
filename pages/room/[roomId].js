import React, {useRef} from 'react'
import {useRouter} from 'next/router'
import {useEffect} from 'react'
import io from 'socket.io-client'

let Room
export default Room = () => {
  const socket = io('http://localhost', {
    path: ':3000',
    forceNew: true
  })

  const localRef = useRef(null)
  const remoteRef = useRef(null)
  const router = useRouter()
  const {roomId} = router.query

  useEffect(() => {

    const permissions = async () => {

      try {

        const Peer = (await import('peerjs')).default
        const myPeer = new Peer()
        const peers = {}

        const addVideoStream = (video, stream) => {
          video.srcObject = stream
          video.addEventListener('loadedmetadata', () => video.play())
        }

        const connectToUser = (userId, stream) => {
          const call = myPeer.call(userId, stream)

          call.on('stream', () =>
              addVideoStream(remoteRef.current, stream)
          )
          call.on('close', () => remoteRef.current.remove())
          peers[userId] = call
        }

        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true
        })
        addVideoStream(localRef.current, stream)

        myPeer.on('call', (call) => {
          call.answer(stream)
          call.on('stream', (userVideoStream) => {
            addVideoStream(remoteRef.current, userVideoStream)
          })
        })

        socket.emit('user-connected', (userId) => connectToUser(userId, stream))
        socket.emit('user-disconnected', (userId) => {
          if (peers[userId]) peers[userId].close()
        })

        myPeer.on('open', (id) => socket.emit('join-room', roomId, id))

      } catch (err) {
        console.error(err)
      }
    }
    permissions()
  }, [roomId])

  return (
      <div>
        <video ref={localRef} muted width="600"/>
        <video ref={remoteRef} width="600"/>
      </div>
  )
}

// export default Room

