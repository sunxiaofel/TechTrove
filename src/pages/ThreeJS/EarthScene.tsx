import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Earth = () => {
  const mountRef = useRef(null);
  const earthRef = useRef(null);
  const cloudsRef = useRef(null);

  useEffect(() => {
    // 初始化场景、相机和渲染器
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      630,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // 添加光源
    const ambientLight = new THREE.AmbientLight(0x666666); // 增加环境光的强度
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 2); // 增加点光源的强度
    pointLight.position.set(5, 3, 5);
    scene.add(pointLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // 增加平行光源的强度
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // 创建地球模型
    const geometry = new THREE.SphereGeometry(1, 64, 64); // 增加细分，提高纹理效果
    const textureLoader = new THREE.TextureLoader();

    const earthTexture = textureLoader.load(
      `${process.env.NODE_ENV === 'production' ? '/TechTrove/' : '/'}imgs/earth.jpg`,
      (texture) => {
        const material = new THREE.MeshPhongMaterial({
          map: texture,
          displacementScale: 0.1, // 调整凹凸不平的强度
          shininess: 30, // 增加高光反射
        });
        const earth = new THREE.Mesh(geometry, material);
        scene.add(earth);
        earthRef.current = earth; // 存储地球的引用

        // 添加云层
        const cloudGeometry = new THREE.SphereGeometry(1.01, 64, 64); // 增加细分，提高纹理效果
        const cloudTexture = textureLoader.load(
          `${process.env.NODE_ENV === 'production' ? '/TechTrove/' : '/'}imgs/clouds.jpg`,
          (cloudTex) => {
            const cloudMaterial = new THREE.MeshPhongMaterial({
              map: cloudTex,
              transparent: true,
              opacity: 0.4,
            });
            const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
            scene.add(clouds);
            cloudsRef.current = clouds; // 存储云层的引用

            // 设置相机位置
            camera.position.z = 3;

            // 动画效果
            const animate = () => {
              requestAnimationFrame(animate);
              if (earthRef.current) {
                earthRef.current.rotation.y += 0.001; // 地球自转速度
              }
              if (cloudsRef.current) {
                cloudsRef.current.rotation.y += 0.0012; // 云层自转速度
              }
              renderer.render(scene, camera);
            };

            animate();
          },
        );
      },
    );

    // 处理窗口调整大小
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // 清理函数
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef}></div>;
};

export default Earth;
