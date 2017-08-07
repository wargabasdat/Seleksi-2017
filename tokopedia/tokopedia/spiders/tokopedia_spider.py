from scrapy import Spider
from scrapy.selector import Selector

from tokopedia.items import TokopediaItem


class TokopediaSpider(Spider):
    name = "tokopedia"
    allowed_domains = ["tokopedia.com"]
    start_urls = [
        "https://www.tokopedia.com/p/handphone-tablet/handphone?page=1",
    ]

    def parse(self, response):
        cards = Selector(response).xpath('//div[@class="product-summary"]')

        for card in cards:
            item = TokopediaItem()
            item['name'] = question.xpath(
                'div[@class="product-name ng-binding"]/text()').extract()[0]
            item['price'] = question.xpath(
                'div[@class="product-price ng-binding"]/text()').extract()[0]
            item['url'] = question.xpath(
                'a[@class="ng-href"]/@href').extract()[0]
            yield item
