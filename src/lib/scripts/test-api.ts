// scripts/test-api.ts
async function testProductsAPI() {
    const baseUrl = 'http://localhost:3000'
    
    console.log('🧪 Probando API de Productos...\n')
  
    try {
      // Test 1: Obtener todos los productos
      console.log('📦 Test 1: Obtener todos los productos')
      const response1 = await fetch(`${baseUrl}/api/products`)
      const data1 = await response1.json()
      
      if (data1.success) {
        console.log(`✅ Success! Encontrados ${data1.count} productos`)
        console.log(`📋 Primer producto: ${data1.data[0]?.name}`)
      } else {
        console.log('❌ Error:', data1.error)
      }
  
      // Test 2: Filtrar por categoría
      console.log('\n🔍 Test 2: Filtrar por categoría IPA')
      const response2 = await fetch(`${baseUrl}/api/products?beerType=IPA`)
      const data2 = await response2.json()
      
      if (data2.success) {
        console.log(`✅ Success! Encontrados ${data2.count} productos IPA`)
      } else {
        console.log('❌ Error:', data2.error)
      }
  
      // Test 3: Búsqueda
      console.log('\n🔎 Test 3: Buscar "clan"')
      const response3 = await fetch(`${baseUrl}/api/products?search=clan`)
      const data3 = await response3.json()
      
      if (data3.success) {
        console.log(`✅ Success! Encontrados ${data3.count} productos con "clan"`)
      } else {
        console.log('❌ Error:', data3.error)
      }
  
      // Test 4: Producto individual
      if (data1.success && data1.data.length > 0) {
        const productId = data1.data[0].id
        console.log(`\n👁️ Test 4: Obtener producto individual (${productId})`)
        
        const response4 = await fetch(`${baseUrl}/api/products/${productId}`)
        const data4 = await response4.json()
        
        if (data4.success) {
          console.log(`✅ Success! Producto: ${data4.data.name}`)
          console.log(`💰 Precio: $${data4.data.price}`)
          console.log(`📂 Categoría: ${data4.data.category.name}`)
        } else {
          console.log('❌ Error:', data4.error)
        }
      }
  
      console.log('\n🎉 Todas las pruebas completadas!')
  
    } catch (error) {
      console.error('❌ Error en las pruebas:', error)
    }
  }
  
  // Ejecutar si es llamado directamente
  if (require.main === module) {
    testProductsAPI()
  }