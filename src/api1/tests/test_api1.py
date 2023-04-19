from api1.handler import handler


def test_api1():
    tested = handler
    expected = 200
    response = tested(event={}, context={})
    assert response["statusCode"] == expected
