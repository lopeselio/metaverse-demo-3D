/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Vineet02 (https://sketchfab.com/Vineet02)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/villa-7c91acf717b14779adf8a6ac48a2d330
title: Villa
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI, -Math.PI, -Math.PI]} scale={[0.4,0.4,0.4]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.phong10SG} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.abcinitialShadingGroup} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.phong2SG} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.phong5SG} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.phong6SG} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.phong7SG} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.phong8SG} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.phong9SG} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
