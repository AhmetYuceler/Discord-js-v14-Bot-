

# Ahmet Yüceler (Versiyon 3.0) (v14.x) #

Profesyoneller tarafından geliştirilen ve "*Yeryüzünde her zaman ücretsiz ve değerli bir şeyler olacaktır.*" felsefesiyle hazırlanan açık kaynaklı, güncel, stabil ve gelişmiş Discord bot altyapısı. 
 
# Özellikler #

- ✅ Plugin sistemi. (Altyapıya istediğiniz özellikleri parça parça ekleyin!)
- ✅ Pluginler için TAM tip desteği.
- ✅ Çoklu dil desteği.
- ✅ Sunucuya özel komut paylaşma tipleri.
- ✅ SelectMenu ve Button desteği.
- ✅ SelectMenu ve Button tam component ve options desteği.
- ✅ Autocomplate (otomatik tamamlama) desteği.
- ✅ Sağtık menü desteği.
- ✅ Slash command desteği.
- ✅ Slash subcommand desteği.
- ✅ Slash subcommandgroup desteği.
- ✅ Async ve aşırı hızlı. (interaksiyon başına 1ms kadar sürüyor!)
- ✅ interaksiyon başına değişken yavaşlatma desteği.
- ✅ interaksiyon başına bot gerekli yetki desteği.
- ✅ interaksiyon başına kullanıcı gerekli yetki desteği.
- ✅ Özelleştirilebilir hata mesajları.
- ✅ Mantık hatası uyarı sistemleri.
- ✅ Bottan kullanıcı yasaklama.
- ✅ interaksiyonlarda otomatik tamamlama.
- ✅ Global Underline objesi. (interactions, events, config, client vb.)
- ✅ İç içe klasör desteği.
- ✅ interaksiyon açıp kapama desteği.
- ✅ Sadece geliştiricilerin kullanabildiği interaksiyon desteği.
- ✅ Genel event desteği.
- ✅ Event otomatik tamamlama desteği.
- ✅ Event kapatabilme.
- ✅ Gelişmiş config dosyası. (Artık index.js dosyasını modifiye etmenize gerek yok!)
- ✅ interaksiyon varsayılanlarını değiştirebilme.
- ✅ Kolay bir şekilde interaksiyon öncesi işlem ekleyebilme.
- ✅ Kolay bir şekilde interaksiyon veya olay altyapsı oluşturabilme.
- ✅ Kolayca dosya devre dışı bırakılabilme. (İsmi tire (-) ile başlayan interaksiyonlar ve olaylar umursanmaz.)
- ✅ Düğme ve Seç menülerde değer/referans taşıyabilme.
- ✅ Other objesi ile her işlemden önce değer belirtebilme.
- ✅ Full otomatik dil desteği. (Komutu kullanan kişinin dilini otomatik belirleme.)
- ✅ Redis ve clustering kullanarak 100% sharding desteği. Normal bir altyapıya kıyasla %80 daha az ram kullanımı!
- ✅ Modal desteği.
- ✅ Geliştrici modu desteği. (Bütün tip dosyaları otomatik olarak güncellenecektir.)


# Gerekenler #
- Node.js; `v18.x`.
- Yarn; `npm install -g yarn`. (Yarn, bizlerin kullandığı ve npm'e göre daha hızlı ve stabil olan bir paket yöneticisidir.)

# Kurulum #
- Proje dosya konumuna gelinip `yarn install` yazılması gerekmektedir ve yeterlidir.
- Proje [kurulumunu yap](#kullanım)tıktan sonra `yarn start` yazarak projeyi başlatabilirsiniz.

# Kullanım #
- Botun genel ayarlarını, kullanıcı hata mesajlarını ve diğer olaylarda düzenleme yapmak için [`config.js`](./config.js) config dosyasını kullanabilirsiniz.
- İnteraksiyonlar için `interactions` klasörünün içindeki [`ornekKomut.js`](./interactions/-ornekKomut.js) ve [`ornekSağtık.js`](./interactions/-ornekSağtık.js) dosyasını kullanabilirsiniz.
- Yeni bir interaksiyon dosyası oluşturmak isterseniz `yarn interaksiyon` interaksiyonunu kullanabilsiniz. Bu sayede sizi ilk interaksiyon altyapısını yazma derdinden kurtaracak ve interaksiyon hakkında her türlü soruyu soracaktır.
- Slash interaksiyonlarını Discord üzerinde global olarak yayınlamak için `node publishInteractions.js global` interaksiyonunu kullanabilirsiniz.
- Slash interaksiyonlarını sadece bir sunucu için yayınlamak istiyorsanız `node publishInteractions.js guild <guildId>` interaksiyonunu kullanabilirsiniz. 
- Bütün interaksiyonları temizlemek için `node publishInteractions.js global clear` veya `node publishInteractions.js guild <guildId> clear` interaksiyonunu kullanabilirsiniz.
  
  Bölüm Bilgilendirmesi: Global interaksiyonların sunuculara gönderilmesi yaklaşık 1 saat kadar sürebilmektedir. Sunucuya özel interaksiyonlar ise 5-10 saniye içerisinde aktif olmaktadır. 
  *Not: Botunuzu test ederken global interaksiyonlar yerine sunucu interaksiyonlarını kullanarak debug etmenizi tavsiye ederiz. Global interaksiyonları spam halinde yayınlarsanız ratelimite takılabilirsiniz.*

- Olaylar için `events` klasörünün içindeki [`-ornekOlay.js`](./events/-ornekOlay.js) dosyasını kullanabilirsiniz.
- Yeni bir olay dosyası oluşturmak isterseniz `yarn olay` interaksiyonunu kullanabilsiniz. Bu sayede sizi ilk olay altyapısını yazma derdinden kurtaracak ve olay hakkında her türlü soruyu soracaktır.