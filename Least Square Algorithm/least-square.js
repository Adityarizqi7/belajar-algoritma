let a, b, x, xy, xkuadrat, y=0, yPredict=0, totalXy=0, totalXK=0

const omzet = [640000, 520000, 464000, 600000, 640000, 720000]

omzet.map((ele, idx) => {

    // Mencari x (Genap)
    x = (idx * 2) - (omzet.length - 1)
    // (0 * 2) - (6 - 1) = (0) - (5) = -5

    // xy
    xy = ((idx * 2) - (omzet.length - 1)) * ele

    // X Kuadrat
    xkuadrat = ((idx * 2) - (omzet.length - 1))**2

    // Mencari nilai total Y
    y+=ele
    
    // Mencari nilai total xy
    totalXy+=(((idx * 2) - (omzet.length - 1)) * ele)

    // Mencari nilai total x kuadrat
    totalXK+=(((idx * 2) - (omzet.length - 1))**2)

    // Hitung nilai A
    a = y / 6

    // Hitung nilai B
    b = totalXy / totalXK
})

// Mencari Nilai Y Prediksi untuk bulan juli 2023
//  Y = a + b.x
yPredict = parseFloat(a.toFixed(2)) + (parseFloat(b.toFixed(2)) * 7)
console.log(yPredict)