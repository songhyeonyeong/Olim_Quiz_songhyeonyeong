/*	4. 어디가 가장 가깝고 싸고 양이 많은가요?? (Only EngineTeam Required)
 *	가성비를 좋아하는 에단은 회사 근처 식당을 거리, 가격, 양을 기준으로 정리했습니다.
 *	
 *	에단의 취향 우선순위는 아래와 같습니다
 *	
 *	1.거리는 가까울수록 좋다
 *	2.가격은 저렴할수록 좋다
 *	3.양은 많을수록 좋다
 *	식당의 순서를 정렬하는 코드를 c++로 작성해 주세요!!
*/


#include <iostream>
#include <vector>
#include <algorithm>

struct store {
    int distance;
    int price;
    int qty;
    store(int d, int p, int q)
        : distance(d), price(p), qty(q)
    {}
};
std::vector<store> data = {
	store(11, 5500, 2500),
	store(10, 4900, 100),
	store(13, 5000, 2000),
	store(13, 5000, 400),
	store(12, 5000, 7000),
	store(11, 4900, 1500),
	store(10, 5000, 100),
	store(12, 4900, 500),
	store(12, 4900, 107),
	store(13, 5500, 4000),
	store(13, 5000, 2000),
	store(11, 5000, 199),
	store(11, 5500, 1000),
	store(10, 5000, 1000),
	store(13, 4900, 3000),
	store(11, 5500, 3500),
	store(10, 5000, 700),
	store(11, 5000, 1000),
	store(12, 5500, 100)
};

bool sorting(store p,store p2) { 
    if (p.distance == p2.distance) { //거리가 같을 경우
		if(p.price == p2.price){     //거리와 가격까지 같을 경우
			 return p.qty > p2.qty;  // 양은 내림차순
		}
        return p.price < p2.price; 	 // 가격은 오름차순	 
    }
	return p.distance < p2.distance; // 거리는 오름차순
}
int main()
{
	sort(data.begin(),data.end(),sorting);
	for (auto d : data)
	{
		std::cout << d.distance << "km ";
		std::cout << d.price << "krw ";
		std::cout << d.qty << "qty " << std::endl;
	}
	return 0;
}